// 返回随机数
function RandomNum(minNum, maxNum)
{
    switch (arguments.length)
    {
        case 1:
            return parseInt(Math.random() * minNum + 1, 10);
            break;
        case 2:
            return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
            break;
        default:
            return 0;
            break;
    }
}

// 随机更换背景图片
function RandomBg()
{
	// 获得随机图片链接
	var randnum=RandomNum(1,169);
	var html="url(https://cdn.jsdelivr.net/gh/wenoif/Picture/bluemini/"+randnum+".jpg)";
	
	// 更改css属性
	document.body.style.backgroundImage=html;
	document.body.style.backgroundSize="100%";
	// 设置背景图片不随网页滚动
	document.body.style.backgroundAttachment="fixed";
}

// 返回随机图片链接
function RandomPicLink()
{
	// 获得随机图片链接
	var randnum=RandomNum(1,169);
	var link="https://cdn.jsdelivr.net/gh/wenoif/Picture/bluemini/"+randnum+".jpg";
	
	return link;
}