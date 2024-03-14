import { prop, getModelForClass } from '@typegoose/typegoose';

export class Product {
    public_id! : string

    @prop({required: true})
    public name!: string

    @prop({required: true, unique: true})
    public slug!: string

    @prop({required: true})
    public image!: string

    @prop({required: true})
    public brand!: string

    @prop({required: true})
    public category!: string
    
    @prop({required: true})
    public category2!: string

    @prop({required: true})
    public description!: string

    @prop({required: true, default: 0})
    public price!: number

    @prop({required: true, default: 0})
    public countInStock!: number

    @prop({required: true, default: 0})
    public rating!: number

    @prop({required: true, default: 0})
    public numReviews!: number

    @prop({required: true, default: 0})
    public discount!: number

    // Méthode statique pour supprimer un produit par son ID
    public static async deleteProductById(publicId: string): Promise<void> {
        await ProductModel.deleteOne({ public_id: publicId }).exec();
    }

}

export const ProductModel = getModelForClass(Product);
