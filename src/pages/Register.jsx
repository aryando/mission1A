import Header from "../components/Header";

export default function Register() {
    return (
        <>
        <Header />
        <main>
            <form>
                <div className="masuk-ke">
                    <h1>Pendaftaran Akun</h1>
                    <p>Yuk, daftarkan akunmu sekarang juga!</p>
                </div>
                <div className="form-group">
                    <div className="nama-lengkap">
                        <label htmlFor="nama">Nama Lengkap<span className="red-star">*</span></label>
                        <input type="text" id="nama" name="nama" required placeholder="Masukan Nama Lengkap Anda" />
                    </div>
                    <div className="email">
                        <label htmlFor="email">E-Mail<span className="red-star">*</span></label>
                        <input type="email" id="email" name="email" required placeholder="Masukan E-Mail Anda" />
                    </div>
                    <div className="jenis-kelamin">
                        <label htmlFor="jenisKelamin">Jenis Kelamin<span className="red-star">*</span></label>
                        <select id="jenisKelamin" name="jenisKelamin" required>
                            <option value="pria">Pria</option>
                            <option value="Wanita">Wanita</option>
                        </select>
                    </div>
                    <div className="phone-group">
                        <label htmlFor="phone">No.Hp<span className="red-star">*</span></label>
                        <input type="number" id="phone" name="phone" required placeholder="Masukan No.Hp Anda" />
                    </div>
                    <div className="password">
                        <label htmlFor="password">Kata Sandi<span className="red-star">*</span></label>
                        <input type="password" id="password" name="password" required placeholder="Masukan Kata Sandi Anda" />
                    </div>
                    <div className="konfirmasi-password">
                        <label htmlFor="konfirmasiPassword">Konfirmasi Kata sandi<span className="red-star">*</span></label>
                        <input type="password" id="konfirmasiPassword" name="konfirmasiPassword" required placeholder="Konfirmasi Kata Sandi Anda" />
                    </div>
                    <div className="forgot-password">
                        <button type="button" className="forgot-password">Lupa Password?</button>
                    </div>
                    <button type="submit" className="btn">Daftar</button>
                    <button type="button" className="btn">Masuk</button>
                    <div className="divider">atau</div>
                    <button type="button" className="google-btn">
                        <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google Logo" className="google-logo"/>Daftar dengan Google
                    </button>
                </div>
            </form>
        </main>
        </>
    )
}