<template>
    <!-- Hero Banner -->
    <div class="position-relative"
        style="background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.8)), url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1925&q=80'); background-size: cover; background-position: center; height: 500px;">
        <div class="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center">
            <div class="container">
                <div class="row">
                    <div class="col-md-8 text-white">
                        <h2 class="display-4 fw-bold text-light">Chào mừng đến với DZHotel</h2>
                        <p class="lead">Khách sạn 5 sao sang trọng – Nơi nghỉ dưỡng tuyệt vời cho bạn và gia đình</p>
                        <button class="btn btn-danger btn-lg">Đặt phòng ngay</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- About Section -->
    <div id="about" class="py-5">
        <div class="container">
            <div class="row mb-4">
                <div class="col-12 text-center">
                    <h2 class="fw-bold">Về DZHotel</h2>
                    <div class="d-inline-block bg-danger" style="width: 60px; height: 3px; margin-bottom: 30px;"></div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <p>DZHotel là chuỗi khách sạn cao cấp được thành lập vào năm 2023, mang đến dịch vụ lưu trú đẳng cấp
                        quốc tế với không gian sang trọng và tiện nghi hiện đại.</p>
                    <p>Với sứ mệnh "Nâng tầm trải nghiệm nghỉ dưỡng Việt Nam", chúng tôi không ngừng cải tiến dịch vụ và
                        đầu tư cơ sở vật chất để đem lại kỳ nghỉ trọn vẹn cho khách hàng.</p>
                    <p>Hiện tại, DZHotel đã có mặt tại nhiều thành phố lớn, đáp ứng nhu cầu lưu trú, du lịch và công tác
                        của hàng ngàn khách hàng mỗi năm.</p>
                </div>
                <div class="col-md-6">
                    <div class="rounded overflow-hidden">
                        <img src="https://duonggiahotel.vn/wp-content/uploads/2023/10/kham-pha-khach-san-AB.jpg"
                            alt="Hình ảnh DZHotel" class="img-fluid w-100">
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Features Section -->
    <div id="features" class="bg-light py-5">
        <div class="container">
            <div class="row mb-4">
                <div class="col-12 text-center">
                    <h2 class="fw-bold">Tiện ích nổi bật</h2>
                    <div class="d-inline-block bg-danger" style="width: 60px; height: 3px; margin-bottom: 30px;"></div>
                </div>
            </div>
            <div class="row g-4">
                <div class="col-md-4">
                    <div class="text-center p-4 bg-white rounded shadow-sm h-100">
                        <div class="mb-3">
                            <i class="bi bi-house-door text-danger fs-1"></i>
                        </div>
                        <h4>Phòng sang trọng</h4>
                        <p class="mb-0">Phòng nghỉ tiện nghi, nội thất hiện đại, tầm nhìn tuyệt đẹp ra thành phố hoặc biển.</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="text-center p-4 bg-white rounded shadow-sm h-100">
                        <div class="mb-3">
                            <i class="bi bi-cup-hot text-danger fs-1"></i>
                        </div>
                        <h4>Nhà hàng & Bar</h4>
                        <p class="mb-0">Thưởng thức ẩm thực đa dạng từ Á đến Âu tại hệ thống nhà hàng sang trọng.</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="text-center p-4 bg-white rounded shadow-sm h-100">
                        <div class="mb-3">
                            <i class="bi bi-heart-pulse text-danger fs-1"></i>
                        </div>
                        <h4>Spa & Gym</h4>
                        <p class="mb-0">Thư giãn tại spa cao cấp và duy trì sức khỏe tại phòng tập hiện đại.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Services Section -->
    <div id="services" class="py-5">
        <div class="container">
            <div class="row mb-4">
                <div class="col-12 text-center">
                    <h2 class="fw-bold">Dịch vụ hiện đại</h2>
                    <div class="d-inline-block bg-danger" style="width: 60px; height: 3px; margin-bottom: 30px;"></div>
                </div>
            </div>
            <div class="row align-items-center">
                <div class="col-md-6 order-md-2">
                    <h3>Trải nghiệm nghỉ dưỡng tuyệt vời</h3>
                    <p>DZHotel cung cấp các dịch vụ hiện đại, tiện lợi:</p>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item bg-transparent"><i class="bi bi-check-circle-fill text-success me-2"></i> Check-in & Check-out online</li>
                        <li class="list-group-item bg-transparent"><i class="bi bi-check-circle-fill text-success me-2"></i> Wifi tốc độ cao toàn khách sạn</li>
                        <li class="list-group-item bg-transparent"><i class="bi bi-check-circle-fill text-success me-2"></i> Phòng thông minh với Smart TV</li>
                        <li class="list-group-item bg-transparent"><i class="bi bi-check-circle-fill text-success me-2"></i> Dịch vụ đưa đón sân bay</li>
                        <li class="list-group-item bg-transparent"><i class="bi bi-check-circle-fill text-success me-2"></i> Hồ bơi ngoài trời & Rooftop bar</li>
                    </ul>
                </div>
                <div class="col-md-6 order-md-1">
                    <div class="rounded overflow-hidden">
                        <img src="https://bachkhoahanoi.edu.vn/wp-content/uploads/2021/06/quan-tri-khach-san-hpc-7.jpg"
                            alt="Dịch vụ DZHotel" class="img-fluid w-100">
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Locations Section -->
    <div id="locations" class="bg-light py-5">
        <div class="container">
            <div class="row mb-4">
                <div class="col-12 text-center">
                    <h2 class="fw-bold">Hệ thống khách sạn</h2>
                    <div class="d-inline-block bg-danger" style="width: 60px; height: 3px; margin-bottom: 30px;"></div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-3 mb-4" v-for="(hotel, index) in hotels" :key="index">
                    <div class="card h-100 shadow-sm">
                        <div class="card-body">
                            <h5 class="card-title">{{ hotel.name }}</h5>
                            <p class="card-text">{{ hotel.address }}</p>
                            <p class="mb-0"><i class="bi bi-telephone me-2"></i> {{ hotel.phone }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      hotels: [
        { name: "DZHotel Hà Nội", address: "123 Lê Duẩn, Hoàn Kiếm, Hà Nội", phone: "024.1234.5678" },
        { name: "DZHotel Đà Nẵng", address: "456 Nguyễn Văn Linh, Hải Châu, Đà Nẵng", phone: "0236.9876.543" },
        { name: "DZHotel TP.HCM 1", address: "789 Nguyễn Huệ, Quận 1, TP.HCM", phone: "028.3333.8888" },
        { name: "DZHotel TP.HCM 2", address: "1058 Nguyễn Văn Linh, Quận 7, TP.HCM", phone: "028.5555.2222" }
      ]
    }
  }
}
</script>
<style></style>