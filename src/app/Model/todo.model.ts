export interface Todo{
    _id: idObj;
    title: string,
    description: string,
    status: string
}

export class idObj {
    $oid!: string;
}