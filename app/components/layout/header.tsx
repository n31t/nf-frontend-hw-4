import Link from 'next/link';


const Header = () => {
    return (
        <header className="text-gray-600 body-font border-b-2 border-blue-500">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                <img className="w-20" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/OLX_2019.svg/1200px-OLX_2019.svg.png"></img>
                </a>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                <img className="w-6 mr-4" src="https://www.svgrepo.com/show/529487/chat-round.svg"></img>
                <a className="mr-5 hover:text-gray-900">Сообщения</a>
                <a className="mr-2 text-sm hover:text-gray-900 border-r-2 pr-2 border-gray-900">Каз</a>
                <a className="mr-5 text-sm hover:text-gray-900">Рус</a>
                <img className="w-6 mr-6" src="https://www.svgrepo.com/show/529012/heart.svg"></img>
                <img className="w-6 mr-1" src="https://www.svgrepo.com/show/532362/user.svg"></img>
                <a className="mr-5 hover:text-gray-900">Ваш профиль</a>
                </nav>
                <button className="inline-flex items-center bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-700 
                rounded text-base mt-4 md:mt-0 text-white">
                Подать объявление
                </button>
            </div>
        </header>
    )
}

export default Header;