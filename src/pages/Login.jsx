import Header from "../components/Header";

export default function Login () {
    return (
        <>
        <Header />
        <main>
            <form>
                <div className="masuk-ke">
                    <h1>Masuk ke Akun</h1>
                    <p>Yuk, lanjutin belajarmu di videobelajar.</p>
                </div>
                <div className="form-group">
                    <div className="form">
                        <label htmlFor="email">E-Mail <span className="red-star">*</span></label>
                        <input type="email" id="email" name="email" required placeholder="Masukan E-Mail Anda" />
                    </div>
                    <div className="form">
                        <label htmlFor="password">Kata Sandi <span className="red-star">*</span></label>
                        <input type="password" id="password" name="password" required placeholder="Masukan Kata Sandi Anda" />
                    </div>
                    <div className="forgot-password">
                        <button type="button" className="forgot-password">Lupa Password?</button>
                    </div>
                    <button type="submit" className="btn">Masuk</button>
                    <button type="button" className="btn">Daftar</button>
                    <div className="divider">atau</div>
                    <button type="button" className="google-btn"><img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google Logo" className="google-logo"/>Masuk dengan Google</button>
                </div>
            </form>
        </main>
        </>
    )
}