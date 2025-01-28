import { IoSearchOutline } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-xs border-b border-foreground/10 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <h1 className="text-2xl font-bold bg-linear-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
              NETFLEX
            </h1>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-foreground hover:text-primary transition-colors">
                홈
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">
                시리즈
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">
                영화
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">
                NEW! 요즘 대세 콘텐츠
              </a>
            </nav>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-hover-foreground rounded-full transition-colors">
              <IoSearchOutline className="w-6 h-6" />
            </button>
            <button className="p-2 hover:bg-hover-foreground rounded-full transition-colors">
              <IoNotificationsOutline className="w-6 h-6" />
            </button>
            <button className="p-1 hover:bg-hover-foreground rounded-full transition-colors">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="profile" className="w-8 h-8 rounded-full" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}