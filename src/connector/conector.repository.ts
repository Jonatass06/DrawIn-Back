import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class ConnectorRepository extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }

  async getOne(col: string, id: string) {
    return await this[col].findUnique({ where: { id } });
  }

  async getMany(col: string) {
    return await this[col].findMany();
  }

  async create(col: string, data: any) {
    return await this[col].create({ data });
  }

  async update(col: string, id: string, data: any) {
    return await this[col].update({ where: { id }, data });
  }

  async delete(col: string, id: string) {
    return await this[col].delete({ where: { id } });
  }

  async deleteMany(col: string, where: any) {
    return await this[col].deleteMany({ where });
  }

  async count(col: string, where: any) {
    return await this[col].count({ where });
  }

  async findMany(col: string, where: any) {
    return await this[col].findMany({ where });
  }

  async findFirst(col: string, where: any) {
    return await this[col].findFirst({ where });
  }

  async findUnique(col: string, where: any) {
    return await this[col].findUnique({ where });
  }

  async updateMany(col: string, where: any, data: any) {
    return await this[col].updateMany({ where, data });
  }

  async upsert(col: string, where: any, create: any, update: any) {
    return await this[col].upsert({ where, create, update });
  }
}
