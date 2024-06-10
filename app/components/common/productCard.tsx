import Link from "next/link";
import { Product } from "../types/product";

const ProductCard = ({ product }: { product: Product }) => {
    return (
        <div className="p-4">
            <div className="p-6 bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition-shadow duration-200">
                <img src={product.image} alt={product.title} className="w-full h-48 object-cover rounded-t-lg mb-4" />
                <div className="flex flex-col justify-between h-full">
                    <div>
                        <Link href={`/products/${product.id}`}><h2 className="text-xl font-semibold mb-2">{product.title}</h2> </Link>
                        <p className="text-gray-700 mb-4">{product.description.substring(0, 60)}...</p>
                    </div>
                    <div>
                        <div className="text-gray-900 font-bold text-lg mb-2">${product.price.toFixed(2)}</div>
                        <div className="flex items-center text-gray-500 text-sm mb-2">
                            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927C9.292 2.189 9.956 1.75 10.705 1.75c.75 0 1.413.44 1.657 1.177l1.59 4.94 5.367.078c.827.012 1.226 1.056.588 1.59l-4.271 3.675 1.54 4.97c.267.867-.706 1.556-1.456 1.086L10 15.44l-4.77 2.826c-.75.445-1.723-.229-1.456-1.086l1.54-4.97-4.27-3.675c-.64-.534-.24-1.578.588-1.59l5.366-.078 1.59-4.94z" />
                            </svg>
                            {product.rating.rate} ({product.rating.count})
                        </div>
                        <div className="text-gray-600 text-sm mb-4">{product.category}</div>
                        <Link href={`/products/${product.id}`} className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-200">
                                View Details
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
