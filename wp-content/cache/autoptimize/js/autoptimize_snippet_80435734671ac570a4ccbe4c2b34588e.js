document.addEventListener('DOMContentLoaded',function(){var page=1;var loadMoreButton=document.getElementById('load-more-button');function FrontloadMorePhotos(){var data={action:'load_more_photos',page:page,category_filter:$('#category-filter').val(),format_filter:$('#format-filter').val(),sort_by:$('#sort-by').val(),};var ajaxUrl=loadMoreButton.getAttribute('data-ajaxurl');var queryFoundPosts=parseInt(loadMoreButton.getAttribute('data-query-found-posts'));$.get(ajaxUrl,data,function(response){if(page===1){$('.container').empty();}
$('.container').append(response);page++;if($('.img-detail').length<queryFoundPosts){$('#load-more-button').show();}else{$('#load-more-button').hide();}
initializeThickbox();});}
loadMoreButton.addEventListener('click',function(event){event.preventDefault();FrontloadMorePhotos();});$('#category-filter, #format-filter, #sort-by').on('change',function(){page=1;FrontloadMorePhotos();});});