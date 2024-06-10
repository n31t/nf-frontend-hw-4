"use client"

import React, { useState } from "react";
import Header from "@/app/components/layout/header";
import Footer from "@/app/components/layout/footer";
import FileUploader from "@/app/components/common/fileUploader";
import { useCreateProduct } from "@/app/api/services/invlidateQuery";
import { ProductData } from "@/app/components/types/product";

const AddingPage = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [charCount, setCharCount] = useState(0);
    const [images, setImages] = useState<string[]>([]);
    const [selectedImage, setSelectedImage] = useState<string | undefined>();

    const { mutate: createProduct } = useCreateProduct();

    const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(e.target.value);
        setCharCount(e.target.value.length);
    };

    const handleFileUpload = (url: string) => {
        setImages(prevImages => [...prevImages, url]);
        if (!selectedImage) setSelectedImage(url);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const productData = {
            title,
            price,
            description,
            image: selectedImage,
            category,
        };
        createProduct(productData , {
            onSuccess: () => {
                // Clear the form inputs after successful submission
                setTitle('');
                setDescription('');
                setPrice('');
                setCategory('');
                setCharCount(0);
                setImages([]);
                setSelectedImage(undefined);
            },
        });
    };

    return (
        <div>
            <Header />
            <div className="min-h-[800px]">
                <div className="flex items-center justify-center min-h-screen bg-gray-100">
                    <div className="w-4/5 bg-white p-8 rounded-lg shadow-lg">
                        <form id="adForm" onSubmit={handleSubmit}>
                            <div className="mb-6">
                                <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-700">
                                    Укажите название*
                                </label>
                                <input
                                    type="text"
                                    id="title"
                                    name="title"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    placeholder="Например, iPhone 11 с гарантией"
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
                                />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-700">
                                    Добавьте описание
                                </label>
                                <textarea
                                    id="description"
                                    name="description"
                                    value={description}
                                    onChange={handleDescriptionChange}
                                    minLength={16}
                                    maxLength={70}
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
                                ></textarea>
                                <div className="text-right text-sm text-gray-500 mt-1">{charCount}/70</div>
                            </div>
                            <div className="mb-6">
                                <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-700">
                                    Категория*
                                </label>
                                <select
                                    id="category"
                                    name="category"
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
                                >
                                    <option value="" disabled>
                                        Выберите категорию
                                    </option>
                                    <option value="electronics">Электроника</option>
                                    <option value="vehicles">Транспорт</option>
                                    <option value="real_estate">Недвижимость</option>
                                    <option value="jobs">Работа</option>
                                    <option value="services">Услуги</option>
                                </select>
                            </div>
                            <div className="mb-6">
                                <label className="block mb-2 text-sm font-medium text-gray-700">
                                    Загрузите файлы
                                </label>
                                <FileUploader onUpload={handleFileUpload} /> {/* Include the FileUploader component */}
                                <input
                                    type="number"
                                    id="price"
                                    name="price"
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 mt-2"
                                    placeholder="Цена"
                                />
                            </div>
                            <div className="mb-6">
                                <label className="block mb-2 text-sm font-medium text-gray-700">
                                    Выберите основное изображение
                                </label>
                                <div className="flex flex-wrap">
                                    {images.map((url, index) => (
                                        <div key={index} className="w-1/4 p-2">
                                            <img
                                                src={url}
                                                alt={`Upload ${index + 1}`}
                                                className={`w-full h-24 object-cover rounded cursor-pointer ${selectedImage === url ? 'border-4 border-blue-500' : 'border'}`}
                                                onClick={() => setSelectedImage(url)}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <button
                                type="submit"
                                disabled={!selectedImage}
                                className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
                            >
                                Отправить
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AddingPage;
