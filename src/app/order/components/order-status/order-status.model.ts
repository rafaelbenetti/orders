export const ORDER_STATUSES: any = {
  START_BOM: {
    nextStatus: ['CONFIRM_BOM'],
    userFriendlyName: 'Bom',
    requiresActionFrom: 'customer',
    backgroundColor: 'bg-cyan-600',
    color: 'text-white',
  },
  START_AVARIA: {
    nextStatus: ['CONFIRM_BOM', 'CONFIRM_AVARIA'],
    userFriendlyName: 'Avaria',
    requiresActionFrom: 'customer',
    backgroundColor: 'bg-cyan-600',
    color: 'text-white',
  },
  CONFIRM_BOM: {
    nextStatus: ['NF_ENVIADA'],
    userFriendlyName: 'Confirmar bom',
    requiresActionFrom: 'customer',
    backgroundColor: 'bg-orange-600',
    color: 'text-white',
  },
  CONFIRM_AVARIA: {
    nextStatus: ['NF_ENVIADA'],
    userFriendlyName: 'Confirmar avaria',
    requiresActionFrom: 'customer',
    backgroundColor: 'bg-orange-600',
    color: 'text-white',
  },
  NF_ENVIADA: {
    nextStatus: ['NF_RECEBIDA'],
    userFriendlyName: 'NF enviada',
    requiresActionFrom: 'admin',
    backgroundColor: 'bg-emerald-600',
    color: 'text-white',
  },
  NF_RECEBIDA: {
    nextStatus: null,
    userFriendlyName: 'NF recebida',
    requiresActionFrom: null,
    backgroundColor: 'bg-emerald-600',
    color: 'text-white',
  },
};

export class OrderStatusConfig {
  nextStatus: string[];
  userFriendlyName: string;
  requiresUserFrom: ActionOwner;
  backgroundColor: string;
  color: string;
}

export enum OrderStatus {
  START_BOM = 'START_BOM',
  START_AVARIA = 'START_AVARIA',
  CONFIRM_BOM = 'CONFIRM_BOM',
  CONFIRM_AVARIA = 'CONFIRM_AVARIA',
  NF_ENVIADA = 'NF_ENVIADA',
  NF_RECEBIDA = 'NF_RECEBIDA',
}

export enum ActionOwner {
  Admin = 'admin',
  Customer = 'customer',
}
