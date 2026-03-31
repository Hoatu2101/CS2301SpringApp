function deleteProduct(url){
    if (confirm("Bạn chắc chán cóa ?")===true){
   fetch(url,{
        method:"delete"
    }).then(res=>{
        if{res.status===204}
        location.reload();
        else
            alert("Xoa that bai");
    });
    }
    
}