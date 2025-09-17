<template>
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                class="active"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></button>
        </div>

        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="https://ik.imagekit.io/tvlk/image/imageResource/2025/02/19/1739955674133-b5e89ae198e578bc2651e8df031d5523.jpeg"
                    class="d-block w-100" alt="Slide 1">
            </div>
            <div class="carousel-item">
                <img src="https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/20006811-db21ad1f1548f64243c4bd116d03932b.jpeg"
                    class="d-block w-100" alt="Slide 2">
            </div>
            <div class="carousel-item">
                <img src="https://forbes.vn/wp-content/uploads/2023/12/Radisson-Blue-Camranh.jpg" class="d-block w-100"
                    alt="Slide 3">
            </div>
        </div>

        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon"></span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next">
            <span class="carousel-control-next-icon"></span>
        </button>
    </div>
    <div class="container my-4">
        <!-- Dịch vụ khách san -->
        <div class="card p-4">
            <h3 class="text-center mb-4">DỊCH VỤ TẠI KHÁCH SẠN</h3>
            <div class="row text-center">
                <div class="col-md-3 mb-3">
                    <i class="fa fa-bed fa-3x text-danger mb-2"></i>
                    <p>
                        <strong>Phòng nghỉ tiện nghi</strong><br />
                        <span class="text-muted">Phòng hiện đại, đầy đủ tiện ích, mang lại sự thoải mái tối đa.</span>
                    </p>
                </div>
                <div class="col-md-3 mb-3">
                    <i class="fa fa-utensils fa-3x text-success mb-2"></i>
                    <p>
                        <strong>Ẩm thực đa dạng</strong><br />
                        <span class="text-muted">Thưởng thức các món ăn Âu, Á và đặc sản địa phương.</span>
                    </p>
                </div>
                <div class="col-md-3 mb-3">
                    <i class="fa fa-concierge-bell fa-3x text-warning mb-2"></i>
                    <p>
                        <strong>Dịch vụ 24/7</strong><br />
                        <span class="text-muted">Đội ngũ nhân viên sẵn sàng hỗ trợ mọi nhu cầu bất cứ lúc nào.</span>
                    </p>
                </div>
                <div class="col-md-3 mb-3">
                    <i class="fa fa-spa fa-3x text-primary mb-2"></i>
                    <p>
                        <strong>Thư giãn & Giải trí</strong><br />
                        <span class="text-muted">Spa, hồ bơi, phòng gym và nhiều dịch vụ giải trí cao cấp.</span>
                    </p>
                </div>
            </div>
        </div>




        <!-- BÀI VIẾT -->
        <h3 class="text-center mb-4 mt-4">TIN TỨC & BÀI VIẾT</h3>
        <div class="row">
            <template v-for="(value, index) in list_bv.slice(0, 6)" :key="index">
                <div class="col-lg-4 mb-4 ">
                    <router-link :to="`/chi-tiet-bai-viet/${value.id}`">
                        <div class="card h-100">
                            <img :src="value.hinh_anh" class="card-img-top" style="height: 250px;">
                            <div class="card-body">
                                <h5 class="card-title text-truncate">{{ value.tieu_de }}</h5>
                                <p class="card-text text-dark">{{ value.mo_ta_ngan }}</p>
                            </div>
                        </div>
                    </router-link>
                </div>
            </template>
        </div>

        <h3 class="text-center mb-4 fw-bold">Khách Hàng Nói Gì Về Khách Sạn DZHotel?</h3>
        <div class="row justify-content-center">
            <!-- Khách hàng 1 -->
            <div class="col-md-4 mb-3">
                <div class="card h-100 shadow-sm" style="background-color: #000957;">
                    <div class="card-body">
                        <div class="d-flex align-items-center mb-2">
                            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="avatar"
                                class="rounded-circle me-3" width="48" height="48">
                            <div>
                                <div class="fw-bold text-light">Nguyễn Văn A</div>
                                <div class="text-muted text-light" style="font-size: 0.95em;">Doanh nhân</div>
                            </div>
                        </div>
                        <div class="mb-2">
                            <span class="text-warning">&#9733;</span>
                            <span class="text-warning">&#9733;</span>
                            <span class="text-warning">&#9733;</span>
                            <span class="text-warning">&#9733;</span>
                            <span class="text-warning">&#9733;</span>
                        </div>
                        <div class="fst-italic text-light" style="font-size: 1em;">
                            "Khách sạn DZHotel có phòng ốc hiện đại, sạch sẽ và dịch vụ chuyên nghiệp. Mỗi chuyến công
                            tác tôi
                            đều chọn nghỉ tại đây."
                        </div>
                    </div>
                </div>
            </div>

            <!-- Khách hàng 2 -->
            <div class="col-md-4 mb-3">
                <div class="card h-100 shadow-sm" style="background-color: #000957;">
                    <div class="card-body">
                        <div class="d-flex align-items-center mb-2">
                            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="avatar"
                                class="rounded-circle me-3" width="48" height="48">
                            <div>
                                <div class="fw-bold text-light">Trần Thị B</div>
                                <div class="text-muted text-light" style="font-size: 0.95em;">Khách du lịch</div>
                            </div>
                        </div>
                        <div class="mb-2">
                            <span class="text-warning">&#9733;</span>
                            <span class="text-warning">&#9733;</span>
                            <span class="text-warning">&#9733;</span>
                            <span class="text-warning">&#9733;</span>
                            <span class="text-warning">&#9733;</span>
                        </div>
                        <div class="fst-italic text-light" style="font-size: 1em;">
                            "Đặt phòng online dễ dàng, lễ tân thân thiện, bữa sáng buffet phong phú – tôi rất hài lòng
                            khi lưu
                            trú tại DZHotel."
                        </div>
                    </div>
                </div>
            </div>

            <!-- Khách hàng 3 -->
            <div class="col-md-4 mb-3">
                <div class="card h-100 shadow-sm" style="background-color: #000957;">
                    <div class="card-body">
                        <div class="d-flex align-items-center mb-2">
                            <img src="https://randomuser.me/api/portraits/men/65.jpg" alt="avatar"
                                class="rounded-circle me-3" width="48" height="48">
                            <div>
                                <div class="fw-bold text-light">Lê Văn C</div>
                                <div class="text-muted text-light" style="font-size: 0.95em;">Khách du lịch</div>
                            </div>
                        </div>
                        <div class="mb-2">
                            <span class="text-warning">&#9733;</span>
                            <span class="text-warning">&#9733;</span>
                            <span class="text-warning">&#9733;</span>
                            <span class="text-warning">&#9733;</span>
                            <span class="text-warning">&#9733;</span>
                        </div>
                        <div class="fst-italic text-light" style="font-size: 1em;">
                            "Phòng rộng rãi, view đẹp, dịch vụ spa và hồ bơi tuyệt vời. Tôi chắc chắn sẽ quay lại
                            DZHotel trong
                            kỳ nghỉ tiếp theo."
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>


</template>

<script>

import axios from 'axios'
export default {
    data() {
        return {
            list_phim: [],
            list_bv: [],
        }
    },
    mounted() {
        this.loadData();
    },
    methods: {
        loadData() {
            axios
                .get('http://127.0.0.1:8000/api/client/home-page')
                .then((res) => {
                    this.list_phim = res.data.data_phim;
                    this.list_bv = res.data.data_bv;
                })
        }
    }
}
</script>

<style>
.carousel-item img {
    max-height: 700px;
    object-fit: cover;
}
</style>