<template>
    <div class="row">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-header mt-2">
                    <h4 class="fw-bold text-primary">
                        THỐNG KÊ KHÁCH HÀNG MỚI
                    </h4>
                </div>
                <div class="card-body">
                    <div class="mb-3">
                        <div class="row g-3 align-items-center">
                            <div class="col-lg-5 col-md-6">
                                <label for="">Từ ngày</label>
                                <input v-model="search.begin" type="date" class="form-control mt-2 mb-2 w-100">
                            </div>
                            <div class="col-lg-5 col-md-6">
                                <label for="">Đến ngày</label>
                                <input v-model="search.end" type="date" class="form-control mt-2 mb-2">
                            </div>
                            <div class="col-lg-2 col-md-12">
                                <label for="">&nbsp;</label>
                                <button @click="thongKe()" class="btn btn-primary w-100">Thống Kê</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-5">
            <div class="card">
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-hover table-bordered">
                            <thead class="table-light">
                                <tr class="table-warning">
                                    <th class="text-center">Ngày</th>
                                    <th class="text-center">Số Lượng Khách Hàng Mới</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="text-center">2025-07-12</td>
                                    <td class="text-center">12</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-7">
            <div class="card">
                <!-- <div class="card-header">
                    <h5 class="mt-2 text-center">BIỂU ĐỒ</h5>
                </div> -->
                <div class="card-body" >
                    <Bar v-if="is_view"
                    id="my-chart-id"
                    :options="chartOptions"
                    :data="chartData"
                  />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
export default {
     name: 'BarChart',
    components: { Bar },
    data() {
        return {
            // day_begin: '',
            // day_end: '',
            search : {},
            list_data: [],
            is_view : false,
            chartData: {
                 labels: [ 'January', 'February', 'March' ],
                 datasets: [
                     {
                        
                         label : "Đây là biểu đồ thống kê khách hàng theo ngày",
                         data: [40, 20, 12] 
                     } 
                 ]
               },
        }
    },
    methods: {
        thongKe() {
           axios
              .post("http://127.0.0.1:8000/api/admin/thong-ke/cau-1", this.search)
              .then((res) => {
                 this.is_view = true;
              })
        }
    },
};
</script>
<style></style>