export class Cart {
    id_user: string;
    id_product: string;
    name: string;
    price: number;
    qty: number;
    img: string;
    status: Boolean
    style: string
    color: string
    size: string


    constructor(
        id_user?: string, name?: string, id_product?: string,
        price?: number, qty?: number, img?: string, status?: Boolean, style?: string, color?: string, size?: string
    ) {
        this.id_user = id_user || '';
        this.name = name || '';
        this.id_product = id_product || '';
        this.price = price || 0;
        this.qty = qty || 0;
        this.img = img || '';
        this.status = status || true;
        this.style = style || '';
        this.color = color || '';
        this.size = size || ''
    }
}
