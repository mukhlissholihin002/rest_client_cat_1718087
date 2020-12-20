async function getData() {
    let url = 'http://localhost/muklis/barang';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function renderData() {
    let json = await getData();
    let html = '';

    console.log(json);
    json.data.forEach(data => {
        let htmlSegment = `
            <div class="card mr-4 mb-4" style="width: 18rem;" >
                <div class="card-body">
                    <h5 class="card-title">${data.NAMA_CAT}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">ID : ${data.ID}</h6>
                    <br>
                    <button class="card-link btn btn-info" id="set-detail" data-target="#modal-detail" data-toggle="modal" data-namacat="${data.NAMA_CAT}"  data-jeniscat="${data.JENIS_CAT}" data-warnacat="${data.WARNA_CAT}"data-ukurancat="${data.UKURAN_CAT}"data-jumlahcat="${data.JUMLAH_CAT}"data-hargacat="${data.HARGA_CAT}"data-id="${data.ID}">Detail</button>
                </div>
            </div>
                        `;

        html += htmlSegment;
    });

    let container = document.querySelector('#tampil');
    container.innerHTML = html;
}

renderData();

$(document).ready(function () {
    $(document).on('click', '#set-detail',function () {
        var ID = $(this).data('id');
        var NAMA_CAT = $(this).data('namacat');
        var JENIS_CAT = $(this).data('jeniscat');
        var WARNA_CAT = $(this).data('warnacat');
        var UKURAN_CAT = $(this).data('ukurancat');
        var JUMLAH_CAT = $(this).data('jumlahcat');
        var HARGA_CAT = $(this).data('hargacat');

        $('#modal-namacat').html(NAMA_CAT);     
        $('#modal-jeniscat').html(JENIS_CAT);  
        $('#modal-warnacat').html(WARNA_CAT);     
        $('#modal-ukurancat').html(UKURAN_CAT);     
        $('#modal-jumlahcat').html(JUMLAH_CAT); 
        $('#modal-hargacat').html(HARGA_CAT); 
        $('#modal-id').html(ID);     
    });
});

