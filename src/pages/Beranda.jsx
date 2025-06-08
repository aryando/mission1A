import Header from "../components/Header";
import CourseCard from "../components/CourseCard";

export default function Beranda() {
    const courses = [
        {
            image: "./images/kelas/kelas1.png",
            title: "Big 4 Auditor Financial Analyst",
            avatar: "./images/avatar/avatar1.png",
            name: "Jenna Ortega",
            role: "Senior Accountant di Gojek",
            rating: "3.5",
            price: "Rp. 300K"
        },
        {
            image: "./images/kelas/kelas2.png",
            title: "Big 4 Auditor Financial Analyst",
            avatar: "./images/avatar/avatar2.png",
            name: "Jenna Ortega",
            role: "Senior Accountant di Gojek",
            rating: "3.5",
            price: "Rp. 300K"
        },
        {
            image: "./images/kelas/kelas3.png",
            title: "Big 4 Auditor Financial Analyst",
            avatar: "./images/avatar/avatar3.png",
            name: "Jenna Ortega",
            role: "Senior Accountant di Gojek",
            rating: "3.5",
            price: "Rp. 300K"
        },
        {
            image: "./images/kelas/kelas4.png",
            title: "Big 4 Auditor Financial Analyst",
            avatar: "./images/avatar/avatar4.png",
            name: "Jenna Ortega",
            role: "Senior Accountant di Gojek",
            rating: "3.5",
            price: "Rp. 300K"
        },
        {
            image: "./images/kelas/kelas5.png",
            title: "Big 4 Auditor Financial Analyst",
            avatar: "./images/avatar/avatar5.png",
            name: "Jenna Ortega",
            role: "Senior Accountant di Gojek",
            rating: "3.5",
            price: "Rp. 300K"
        },
        {
            image: "./images/kelas/kelas6.png",
            title: "Big 4 Auditor Financial Analyst",
            avatar: "./images/avatar/avatar6.png",
            name: "Jenna Ortega",
            role: "Senior Accountant di Gojek",
            rating: "3.5",
            price: "Rp. 300K"
        },
        {
            image: "./images/kelas/kelas7.png",
            title: "Big 4 Auditor Financial Analyst",
            avatar: "./images/avatar/avatar7.png",
            name: "Jenna Ortega",
            role: "Senior Accountant di Gojek",
            rating: "3.5",
            price: "Rp. 300K"
        },
        {
            image: "./images/kelas/kelas8.png",
            title: "Big 4 Auditor Financial Analyst",
            avatar: "./images/avatar/avatar8.png",
            name: "Jenna Ortega",
            role: "Senior Accountant di Gojek",
            rating: "3.5",
            price: "Rp. 300K"
        },
        {
            image: "./images/kelas/kelas9.png",
            title: "Big 4 Auditor Financial Analyst",
            avatar: "./images/avatar/avatar9.png",
            name: "Jenna Ortega",
            role: "Senior Accountant di Gojek",
            rating      : "3.5",
            price: "Rp. 300K"
        }
    ]
    return (
        <>
        <Header />
        <main>
            <section className="hero-section">
                <h1>Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Interaktif!</h1>
                <p>Temukan ilmu baru yang menarik dan mendalam melalui koleksi vidio pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat berpartisipasi dalam latihan interaktif yang akan meningkatkan pemahaman anda.</p>
                <button type="button" className="btn-cta">Temukan Video Course untuk Dipelajari!</button> 
            </section>
            <section className="courses">
                <h3>Koleksi Video Pembelajaaran Unggulan</h3>
                <p>Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!</p>
                <nav className="category-menu">
                    <button type="button" className="category-link">Semua Kelas</button>
                    <button type="button" className="category-link">Pemasaran</button>
                    <button type="button" className="category-link">Desain</button>
                    <button type="button" className="category-link">Pengembangan Diri</button>
                    <button type="button" className="category-link">Bisnis</button>
                </nav>
                <div className="course-grid">
                    {courses.map((course, index) => (
                        <CourseCard key={index} {...course}/>
                    ))}
                </div>
            </section>
        <section className="news-letter">
            <h5>NEWSLETTER</h5>
            <h3>Mau Belajar Lebih Banyak?</h3>
            <p>daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran spesial dari program-program terbaik hariesok.id</p>
            <form className="subscribe">
                <input type="email" placeholder="Masukkan Emailmu" required />
                <button type="submit" className="btn">Subscribe</button>
            </form>
        </section>
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <img src="./images/Logo.png" alt="Logo" className="logo-footer"/>
                </div>
                    <div className="footer-text">
                        <h6>Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!</h6>
                        <p>Jl. Usman effendi No.50 Lowokwaru, Malang</p>
                        <p>+62-877-7123-1234</p>
                    </div>
            </div>
            <div className="links">
                <div className="product">
                    <h5>Kategori</h5>
                    <ul>
                        <li><button type="button" className="product-link">Digital & Teknologi</button></li>
                        <li><button type="button" className="product-link">Pemasaran</button></li>
                        <li><button type="button" className="product-link">Manajemen Bisnis</button></li>
                        <li><button type="button" className="product-link">Pengembangan Diri</button></li>
                        <li><button type="button" className="product-link">Desain</button></li>
                    </ul>
                </div>
                <div className="company">
                    <h5>Perusahaan</h5>
                    <ul>
                        <li><button type="button" className="company-link">Tentang Kami</button></li>
                        <li><button type="button" className="company-link">FAQ</button></li>
                        <li><button type="button" className="company-link">Ketentuan Layanan</button></li>
                        <li><button type="button" className="company-link">Bantuan</button></li>
                    </ul>
                </div>
                <div className="comunity">
                    <h5>Komunitas</h5>
                    <ul>
                        <li><button type="button" className="comunity-link">Tips Sukses</button></li>
                        <li><button type="button" className="comunity-link">Blog</button></li>
                    </ul>
                </div>
            </div>
            <div className="social-media">
                <button type="button" className="btn-sc"><i className="fa-brands fa-linkedin-in"></i></button>
                <button type="button" className="btn-sc"><i className="fa-brands fa-facebook-f"></i></button>
                <button type="button" className="btn-sc"><i className="fa-brands fa-instagram"></i></button>
                <button type="button" className="btn-sc"><i className="fa-brands fa-twitter"></i></button>
            </div>
            <p className="copyright">©2023 Gerobak Sayur All rights reserved.</p>  
        </footer>
        </main>
        </>
    )
}