export default function AuthLinks() {
    return (
        <div className="auth--links">
            <a href="#">개인정보처리방침</a>
            <a href="#">약관</a>
            <a href="#">도움말</a>
            <select>
                <option value="">한국어</option>
                <option value="">영어</option>
                <option value="">일본어</option>
                <option value="">중국어(간체)</option>
            </select>
        </div>
    );
}