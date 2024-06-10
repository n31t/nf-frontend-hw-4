

// const InputCategory: React.FC<InputCategoryProps> = ({
// }) => {
//     return (
//         <div className="flex items-center justify-center min-h-screen bg-gray-100">
//             <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
//                 <form id="adForm" onSubmit={handleSubmit}>
//                     <div className="mb-6">
//                         <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-700">
//                             Укажите название*
//                         </label>
//                         <input
//                             type="text"
//                             id="title"
//                             name="title"
//                             value={title}
//                             onChange={(e) => setTitle(e.target.value)}
//                             placeholder="Например, iPhone 11 с гарантией"
//                             required
//                             className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
//                         />
//                     </div>
//                     <div className="mb-6">
//                         <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-700">
//                             Добавьте заголовок
//                         </label>
//                         <textarea
//                             id="description"
//                             name="description"
//                             value={description}
//                             onChange={handleDescriptionChange}
//                             minLength={16}
//                             maxLength={70}
//                             required
//                             className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
//                         ></textarea>
//                         <div className="text-right text-sm text-gray-500 mt-1">{charCount}/70</div>
//                     </div>
//                     <div className="mb-6">
//                         <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-700">
//                             Категория*
//                         </label>
//                         <select
//                             id="category"
//                             name="category"
//                             value={category}
//                             onChange={(e) => setCategory(e.target.value)}
//                             required
//                             className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
//                         >
//                             <option value="" disabled selected>
//                                 Выберите категорию
//                             </option>
//                             <option value="electronics">Электроника</option>
//                             <option value="vehicles">Транспорт</option>
//                             <option value="real_estate">Недвижимость</option>
//                             <option value="jobs">Работа</option>
//                             <option value="services">Услуги</option>
//                         </select>
//                     </div>
//                     <button
//                         type="submit"
//                         className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
//                     >
//                         Отправить
//                     </button>
//                 </form>
//             </div>
//         </div>

//     )
// }