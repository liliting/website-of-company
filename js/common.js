$(function(){
	/* @list1-3分别为解决方案，业务领域，关于我们的子菜单（Name---链接名称，url---链接地址）*/
	//$('.navgation').hide();	
	var flag=0;
	var list1=[{'Name':'家居行业','url':'solution.html'},{'Name':'地产行业','url':'solution.html'},{'Name':'旅游行业','url':'solution.html'},{'Name':'教育行业','url':'solution.html'},{'Name':'医疗行业','url':'solution.html'},{'Name':'综合行业','url':'solution.html'}];
 	var list2=[{'Name':'移动互联','url':'work.html'},{'Name':'计算机视觉','url':'work.html'},{'Name':'虚拟现实','url':'work.html'},{'Name':'大数据挖掘','url':'work.html'},{'Name':'云计算','url':'work.html'}];
 	var list3=[{'Name':'公司简历','url':'company.html'},{'Name':'文化与责任','url':'culture.html'},{'Name':'过去与现在','url':'history.html'},{'Name':'加入我们','url':'join-us.html'}];
	$('.header-nav').on('click',function(){
		active($(this),$('.header-nav'));	
		if(flag==0){
			switch($(this).index()){
				case 0:$('.nav-item').remove();$('.navgation').slideUp();flag=0;break;
				case 1:$('.nav-item').remove();append($('.nav-ul'),list1);$('.navgation').slideDown();flag=1;break;
				case 2:$('.nav-item').remove();append($('.nav-ul'),list2);$('.navgation').slideDown();flag=1;break;
				case 3:$('.nav-item').remove();$('.navgation').slideUp();flag=0;break;
				case 4:$('.nav-item').remove();append($('.nav-ul'),list3);$('.navgation').slideDown();flag=1;break;
			}
		}
		else if(flag==1){
			$('.navgation').slideUp();
			flag=0;
		}
		$('html,body').animate({scrollTop:0},400);
		
	});
	$(document).on('click','.nav-item',function(){
		active($(this),$('.nav-item'));
	});

	function append(target,list){
		$.each(list,function(n,value){
			target.append(createItem(value.Name,value.url));
		});
	};

	function createItem(name,url){
		return $('<li class="nav-item"><a href="'+url+'">'+name+'</a></li>');
	};

	function active(addTarget,target){
		target.each(function(){
			$(this).removeClass('active');
		});
		addTarget.addClass('active');
	};
	$('.contact-form').submit(function(){
		$('#promote,#meng').show();
		$('#meng').show();
		return false;
	});
	$('.alert-close,#know').on('click',function(){
		$('#promote,#meng').hide();
	});
	

});
