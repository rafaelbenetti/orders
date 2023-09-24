export interface Order {
  id: string;
  returnOrderId: string;
  status: string;
  notaFiscal: string;
  productName: string;
  serialNumber: string;
  description?: string;
  name?: string;
  createdOn: Date;
  updatedOn: Date;
}

export interface OrderCreateDto {
  title: string;
  body: string;
}
