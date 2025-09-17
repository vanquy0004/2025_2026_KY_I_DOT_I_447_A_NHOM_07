<!-- <template>
    <header>
        <nav class="navbar navbar-expand-lg navbar-dark py-0" style="background-color: #000957;">
            <div class="container"> <a class="navbar-brand fs-4 fw-bold" href="#"><span class="text-warning">DZ</span>Cinema</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent1"
                    aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent1">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    </ul>
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <router-link to="/">
                            <li class="nav-item"> <a class="nav-link  text-light fs-6" aria-current="page" href="#">Trang
                                    Chủ</a>
                            </li>
                        </router-link>
                        <li class="nav-item dropdown"> <a class="nav-link dropdown-toggle text-light fs-6" href="#" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Phim
                            </a>
                            <ul class="dropdown-menu">
                                <router-link to="/phim/dang-chieu">
                                    <li><a class="dropdown-item" href="/phim/dang-chieu">Phim Đang Chiếu</a>
                                    </li>
                                </router-link>
                                <router-link to="/phim/sap-chieu">
                                    <li><a class="dropdown-item" href="/phim/sap-chieu">Phim Sắp Chiếu</a>
                                    </li>
                                </router-link>
                            </ul>
                        </li>
                        <router-link to="/bai-viet">
                            <li class="nav-item"> <a class="nav-link text-light fs-6" href="/bai-viet">Bài Viết</a>
                            </li>
                        </router-link>
                        <router-link to="/about">
                            <li class="nav-item"> <a class="nav-link text-light fs-6" href="/about">Về chúng tôi</a>
                            </li>
                        </router-link>
                    </ul>
                    <div class="d-flex nav-search">
                        <div class="my-2 border radius-30 ">
                            <div class="dropdown">
                                <a class="d-flex align-items-center nav-link dropdown-toggle dropdown-toggle-nocaret"
                                    href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src="https://cellphones.com.vn/sforum/wp-content/uploads/2024/02/anh-avatar-cute-58.jpg" class="user-img"
                                        style="height: 35px; object-fit: cover;">
                                    <div class="user-info ps-3 pe-3">
                                        <p class="user-name mb-0 text-light">Pauline Seitz</p>
                                        <p class="designattion mb-0">@username</p>
                                    </div>
                                </a>
                                <ul class="dropdown-menu dropdown-menu-end">
                                    <router-link to="/client/profile">
                                        <li><a class="dropdown-item" href="javascript:;"><i
                                                    class="bx bx-user"></i><span>Profile</span></a>
                                        </li>
                                    </router-link>
                                    <li><a class="dropdown-item" href="javascript:;"><i
                                                class="bx bx-log-out-circle"></i><span>Logout</span></a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>
<script>
export default {

}
</script>
<style></style> -->

<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-3">
    <div class="container-fluid justify-content-center">

      <!-- Logo -->
      <a class="navbar-brand fw-bold text-warning me-5" href="#">HotelManager</a>

      <!-- Nút thu gọn khi màn hình nhỏ -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Menu -->
      <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
        <ul class="navbar-nav mx-auto">
          <router-link to="/">
            <li class="nav-item">
              <a class="nav-link active" href="#">Trang chủ</a>
            </li>
          </router-link>
          <li class="nav-item dropdown"> <a class="nav-link dropdown-toggle text-light fs-6" href="#" role="button"
              data-bs-toggle="dropdown" aria-expanded="false">
              Quản lý phòng
            </a>
            <ul class="dropdown-menu">
              <router-link to="/phong/danh-sach-phong">
                <li><a class="dropdown-item" href="/phong/danh-sach-phong">Danh Sách Phòng</a>
                </li>
              </router-link>
              <router-link to="/phong/dat-phong">
                <li><a class="dropdown-item" href="/phong/dat-phong">Đặt Phòng</a>
                </li>
              </router-link>
            </ul>
          </li>
          <!-- <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
              Quản lý phòng
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Danh sách phòng</a></li>
              <li><a class="dropdown-item" href="#">Đặt phòng</a></li>
              <li><a class="dropdown-item" href="#">Tình trạng phòng</a></li>
            </ul>
          </li> -->
          <router-link to="/bai-viet">
            <li class="nav-item">
              <a class="nav-link" href="/bai-viet">Bài Viết</a>
            </li>
          </router-link>
          <router-link to="/about">
            <li class="nav-item">
              <a class="nav-link" href="/about">Về chúng tôi</a>
            </li>
          </router-link>



        </ul>

        <!-- Profile -->
        <div class="d-flex align-items-center ms-3">
          <img src="https://i.pravatar.cc/40" alt="avatar" class="rounded-circle me-2" />
          <div class="text-white small">
            <strong>SE 447 A</strong><br>
            <span class="text-muted">@manager</span>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style>
.navbar {
  background-color: #00134d !important;
  /* xanh đậm */
}

.nav-link {
  color: #fff !important;
}

.nav-link:hover {
  color: #ffc107 !important;
  /* hover vàng */
}

.dropdown-menu {
  background-color: #00134d;
}

.dropdown-item {
  color: white;
}

.dropdown-item:hover {
  background-color: #ffc107;
  color: black;
}
</style>
