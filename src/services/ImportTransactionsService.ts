import fs from 'fs';
import path from 'path';
import csv from 'csvtojson';

import uploadConfig from '../config/upload';

import Transaction from '../models/Transaction';

import CreateTransactionService from './CreateTransactionService';

interface Request {
  filename: string;
}

class ImportTransactionsService {
  async execute({ filename }: Request): Promise<Transaction[]> {
    const createTransaction = new CreateTransactionService();

    const filePath = path.join(uploadConfig.directory, filename);
    const csvFile = await csv().fromFile(filePath);
    await fs.promises.unlink(filePath);

    const transactions: Transaction[] = [];

    for (const file of csvFile) {
      const { title, type, value, category } = file;

      // eslint-disable-next-line no-await-in-loop
      const transaction = await createTransaction.execute({
        title,
        type,
        value: Number.parseFloat(value),
        category,
      });

      transactions.push(transaction);
    }

    return transactions;
  }
}

export default ImportTransactionsService;
