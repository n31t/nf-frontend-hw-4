
const Footer = () => {
    return (
        <footer className=" py-10 px-5 text-gray-900 border-t-2 border-blue-500">
            <div className="container mx-auto grid grid-cols-4 gap-8  px-10">
                <div>
                    <ul>
                        <li className=" mb-2"><a href="#">Мобильные приложения</a></li>
                        <li className=" mb-2"><a href="#">Помощь и Обратная связь</a></li>
                        <li className=" mb-2"><a href="#">Рекламные услуги</a></li>
                        <li className=" mb-2"><a href="#">Бизнес на OLX</a></li>
                        <li className=" mb-2"><a href="#">Условия использования</a></li>
                        <li className=" mb-2"><a href="#">Политика конфиденциальности</a></li>
                        <li className=" mb-2"><a href="#">Баннерная реклама</a></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li className=" mb-2"><a href="#">Правила безопасности</a></li>
                        <li className=" mb-2"><a href="#">Карта сайта</a></li>
                        <li className=" mb-2"><a href="#">Карта регионов</a></li>
                        <li className=" mb-2"><a href="#">Популярные запросы</a></li>
                        <li className=" mb-2"><a href="#">Работа в OLX</a></li>
                    </ul>
                </div>
            </div>
            <div className="text-center mt-10">
                <p>&copy; {new Date().getFullYear()} OLX. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;