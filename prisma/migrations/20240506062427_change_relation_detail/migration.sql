/*
  Warnings:

  - A unique constraint covering the columns `[customer_id]` on the table `customer_details` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `customer_details_customer_id_key` ON `customer_details`(`customer_id`);
