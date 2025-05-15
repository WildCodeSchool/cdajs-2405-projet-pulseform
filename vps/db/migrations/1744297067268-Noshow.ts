import { MigrationInterface, QueryRunner } from "typeorm";

export class Noshow1744297067268 implements MigrationInterface {
    name = 'Noshow1744297067268'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "group" RENAME COLUMN "deleted_by" TO "deleted"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "group" RENAME COLUMN "deleted" TO "deleted_by"`);
    }

}
