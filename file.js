function imageChange(position)
{
    var Image_Id = document.getElementById('getImage');
    if(position==1)
    {
        Image_Id.src = "img/image.png"
    }
    else if(position==2)
    {
        Image_Id.src = "img/image2.jpeg"
    }
    else
    {
        Image_Id.src = "img/image3.jpg"
    }
}

function open_form()
{
    document.getElementById("form").style.display="block";
}
