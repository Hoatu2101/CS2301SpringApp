function deleteProduct(url) {
    if (confirm("Bạn có chắc chắn muốn xóa sản phẩm này?")) {
        fetch(url, { method: 'DELETE' })
            .then(res => {
                if(res.ok){
                    alert("Xóa thành công!");
                    location.reload(); // reload page hoặc xóa row nếu muốn
                } else {
                    alert("Xóa thất bại!");
                }
            })
            .catch(err => console.error(err));
    }
}