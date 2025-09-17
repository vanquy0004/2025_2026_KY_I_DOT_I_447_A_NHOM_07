<template>
    <footer class="text-white text-center" style="background-color: #000957;">
        <div class="container py-4">
            <!-- Social Media Links -->
            <section class="mb-4">
                <a class="btn btn-outline-light btn-floating m-1" href="https://facebook.com" role="button" target="_blank">
                    <i class="fab fa-facebook-f"></i>
                </a>
                <a class="btn btn-outline-light btn-floating m-1" href="https://twitter.com" role="button" target="_blank">
                    <i class="fab fa-twitter"></i>
                </a>
                <a class="btn btn-outline-light btn-floating m-1" href="https://instagram.com" role="button" target="_blank">
                    <i class="fab fa-instagram"></i>
                </a>
                <a class="btn btn-outline-light btn-floating m-1" href="https://linkedin.com" role="button" target="_blank">
                    <i class="fab fa-linkedin-in"></i>
                </a>
            </section>

            <!-- Newsletter Signup -->
            <section class="mb-4">
                <form>
                    <div class="row d-flex justify-content-center align-items-center">
                        <div class="col-auto">
                            <p class="mb-0 fw-bold">Đăng ký nhận ưu đãi mới</p>
                        </div>
                        <div class="col-md-5 col-12">
                            <div class="form-outline form-white mb-3 mb-md-0">
                                <input type="email" class="form-control" placeholder="Nhập email của bạn" />
                            </div>
                        </div>
                        <div class="col-auto">
                            <button type="submit" class="btn btn-outline-danger">Đăng ký</button>
                        </div>
                    </div>
                </form>
            </section>

            <!-- Navigation and Company Info -->
            <section>
                <div class="row text-start">
                    <!-- Brand Name -->
                    <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 class="text-uppercase fw-bold mb-3 text-light">DZHotel</h5>
                        <p>
                            Đặt phòng khách sạn dễ dàng, nhanh chóng với trải nghiệm tuyệt vời!
                        </p>
                    </div>

                    <!-- Navigation Links -->
                    <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
                        <h6 class="fw-bold mb-3 text-light">Điều hướng</h6>
                        <ul class="list-unstyled">
                            <li class="mb-2">
                                <a href="/" class="text-white text-decoration-none">Trang chủ</a>
                            </li>
                            <li class="mb-2">
                                <a href="/rooms" class="text-white text-decoration-none">Phòng</a>
                            </li>
                            <li class="mb-2">
                                <a href="/services" class="text-white text-decoration-none">Dịch vụ</a>
                            </li>
                            <li>
                                <a href="/offers" class="text-white text-decoration-none">Ưu đãi</a>
                            </li>
                        </ul>
                    </div>

                    <!-- Support Links -->
                    <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
                        <h6 class="fw-bold mb-3 text-light">Hỗ trợ</h6>
                        <ul class="list-unstyled">
                            <li class="mb-2">
                                <a href="/contact" class="text-white text-decoration-none">Liên hệ</a>
                            </li>
                            <li class="mb-2">
                                <a href="/about" class="text-white text-decoration-none">Về chúng tôi</a>
                            </li>
                            <li>
                                <a href="/privacy" class="text-white text-decoration-none">Chính sách bảo mật</a>
                            </li>
                        </ul>
                    </div>

                    <!-- Company Info -->
                    <div class="col-lg-5 col-md-6 mb-4 mb-md-0">
                        <h6 class="fw-bold mb-3 text-light">Thông tin công ty</h6>
                        <p>
                            CÔNG TY TNHH DZHOTEL<br>
                            Số ĐKKD: 0317895678<br>
                            Nơi cấp: Sở Kế hoạch và Đầu tư Tp. Đà Nẵng<br>
                            Ngày đăng ký: 20/08/2022<br>
                            Địa chỉ: 123 Lê Duẩn, Quận Hải Châu, Tp. Đà Nẵng
                        </p>
                    </div>
                </div>
            </section>
        </div>

        <!-- Copyright -->
        <div class="text-center p-3 bg-black">
            © 2025 DZHOTEL. All rights reserved.
        </div>
    </footer>
</template>

<script>
export default {};
</script>
