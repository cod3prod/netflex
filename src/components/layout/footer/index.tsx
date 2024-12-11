export default function Footer() {
  return (
    <footer className="bg-dark-bg border-t border-foreground/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">NEXTFLIX</h3>
            <p className="text-sm text-foreground/70">
              최고의 영화와 TV 프로그램을 무제한으로 시청하세요.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold mb-4">둘러보기</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-foreground/70 hover:text-foreground">홈</a></li>
              <li><a href="#" className="text-sm text-foreground/70 hover:text-foreground">시리즈</a></li>
              <li><a href="#" className="text-sm text-foreground/70 hover:text-foreground">영화</a></li>
              <li><a href="#" className="text-sm text-foreground/70 hover:text-foreground">최신 콘텐츠</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold mb-4">고객 센터</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-foreground/70 hover:text-foreground">자주 묻는 질문</a></li>
              <li><a href="#" className="text-sm text-foreground/70 hover:text-foreground">계정 관리</a></li>
              <li><a href="#" className="text-sm text-foreground/70 hover:text-foreground">고객 지원</a></li>
              <li><a href="#" className="text-sm text-foreground/70 hover:text-foreground">문의하기</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold mb-4">법적 고지</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-foreground/70 hover:text-foreground">개인정보 처리방침</a></li>
              <li><a href="#" className="text-sm text-foreground/70 hover:text-foreground">이용약관</a></li>
              <li><a href="#" className="text-sm text-foreground/70 hover:text-foreground">쿠키 설정</a></li>
              <li><a href="#" className="text-sm text-foreground/70 hover:text-foreground">회사 정보</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-foreground/5">
          <p className="text-sm text-foreground/50 text-center">
            © 2024 NETFLEX. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
