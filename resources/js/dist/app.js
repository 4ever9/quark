"use strict";var indexProductOther,myCarousel=document.getElementById("appIndicators"),whyCarousel=document.getElementById("whyIndicators"),whyCarouselItems=$(".why-carousel-item"),appCarouselItems=$(".app-carousel-item");"/"===window.location.pathname&&((indexProductOther=$(".index-product-other")).each(function(e,a){$(a).mouseenter(function(e){$(a).addClass("active"),$(a).children(".index-product-normal-img").removeClass("active"),$(a).children(".index-product-active-img").addClass("active")}).mouseleave(function(e){$(a).removeClass("active"),$(a).children(".index-product-normal-img").addClass("active"),$(a).children(".index-product-active-img").removeClass("active")})}),myCarousel.addEventListener("slide.bs.carousel",function(t){appCarouselItems.each(function(e,a){$(a).removeClass("active"),t.to===e&&$(a).addClass("active")})}),whyCarousel.addEventListener("slide.bs.carousel",function(t){whyCarouselItems.each(function(e,a){$(a).removeClass("active"),t.to===e&&$(a).addClass("active")})})),$(".about-credentials").slick({dots:!1,infinite:!0,speed:300,slidesToShow:1,centerMode:!0,variableWidth:!0,autoplay:!0,autoplaySpeed:2e3,arrows:!1}),$(".price-card").each(function(e,a){$(a).click(function(e){$(".price-card").removeClass("active"),$(a).addClass("active")})}),$(".price-card-first").click(function(e){$(".price-second").removeClass("active"),$(".price-first").addClass("active")}),$(".price-card-second").click(function(e){$(".price-first").removeClass("active"),$(".price-second").addClass("active")}),$("#wechat-btn").mouseenter(function(e){$(".wechat-layer").addClass("active")}).mouseleave(function(e){$(".wechat-layer").removeClass("active")}),$(".bsa").click(function(e){var a=$(this).data("target");$("pre").removeClass("active"),$("."+a).addClass("active")}),$(".service-tab").each(function(a,t){$(t).click(function(e){$(".service-tab").removeClass("active"),$(t).addClass("active"),$(".service-tab-content").removeClass("active"),$(".service-tab-content").eq(a).addClass("active"),$(".t").removeClass("active"),$(".t").eq(a).addClass("active")}),$(".service-response-wrap").removeClass("active")}),$(".sidebar-item").each(function(e,a){$(a).mouseenter(function(){$(a).addClass("active"),$(a).find("img").eq(0).removeClass("active"),$(a).find("img").eq(1).addClass("active"),$(a).find(".sidebar-content-wechat").addClass("active")}).mouseleave(function(){$(a).removeClass("active"),$(a).find("img").eq(0).addClass("active"),$(a).find("img").eq(1).removeClass("active"),$(".sidebar-content-wechat").removeClass("active")})}),$("#up").click(function(e){e.preventDefault(),$("html,body").animate({scrollTop:0},50)});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJpbmRleFByb2R1Y3RPdGhlciIsIm15Q2Fyb3VzZWwiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwid2h5Q2Fyb3VzZWwiLCIkIiwiYXBwQ2Fyb3VzZWxJdGVtcyIsInBhdGhuYW1lIiwiaSIsIm9iaiIsImUiLCJtb3VzZWVudGVyIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImNoaWxkcmVuIiwibW91c2VsZWF2ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImVhY2giLCJ0byIsIndoeUNhcm91c2VsSXRlbXMiLCJzbGljayIsImRvdHMiLCJpbmZpbml0ZSIsInNwZWVkIiwic2xpZGVzVG9TaG93IiwiY2VudGVyTW9kZSIsInZhcmlhYmxlV2lkdGgiLCJhdXRvcGxheSIsImF1dG9wbGF5U3BlZWQiLCJjbGljayIsImNscyIsInRoaXMiLCJkYXRhIiwiZXEiLCJmaW5kIiwicHJldmVudERlZmF1bHQiLCJhbmltYXRlIiwic2Nyb2xsVG9wIl0sIm1hcHBpbmdzIjoiYUFBQSxJQU1VQSxrQkFOSkMsV0FBYUMsU0FBU0MsZUFBZSxpQkFDckNDLFlBQWNGLFNBQVNDLGVBQWUsaUJBRHRDRixpQkFBcUJJLEVBQUNGLHNCQUN0QkMsaUJBQWNGLEVBQVNDLHNCQUVGLE1BQXJCRyxPQUFBQSxTQUFnQkMsWUFHWlAsa0JBQW9CSyxFQUFFLHlCQUF0QkwsS0FBcUIsU0FBQ1EsRUFBQUMsR0FFNUJULEVBQUFBLEdBQUFBLFdBQXVCLFNBQUFVLEdBQ1pDLEVBQUFBLEdBQUFBLFNBQVcsVUFDZE4sRUFBT08sR0FBQUEsU0FBUyw2QkFBaEJDLFlBQUEsVUFDQVIsRUFBT1MsR0FBQUEsU0FBUyw2QkFBNkJELFNBQVksWUFDeERFLFdBQWUsU0FBQUwsR0FDakJLLEVBQUFBLEdBQVdGLFlBQWEsVUFDdkJSLEVBQU9RLEdBQUFBLFNBQVksNkJBQW5CRCxTQUFBLFVBQ0FQLEVBQU9TLEdBQUFBLFNBQVMsNkJBQTZCRixZQUE3QyxjQUtSWCxXQUFXZSxpQkFBaUIsb0JBQXFCLFNBQUFDLEdBQzdDWCxpQkFBQVksS0FBc0IsU0FBYVQsRUFBYkEsR0FDbEJKLEVBQU9RLEdBQUFBLFlBQVksVUFDZkksRUFBTUUsS0FBT1gsR0FBUFcsRUFBTlYsR0FBYUQsU0FBRyxjQU01QkosWUFBWVksaUJBQWlCLG9CQUFxQixTQUFBQyxHQUM5Q0csaUJBQUFGLEtBQXNCLFNBQWFULEVBQWJBLEdBQ2xCSixFQUFPUSxHQUFBQSxZQUFZLFVBQ2ZJLEVBQU1FLEtBQU9YLEdBQVBXLEVBQU5WLEdBQWFELFNBQUcsZUFPaENILEVBQUUsc0JBQXNCZ0IsTUFBTSxDQUE1QkMsTUFBQSxFQUNFQSxVQUQwQixFQUUxQkMsTUFBUSxJQUNSQyxhQUgwQixFQUkxQkMsWUFBYyxFQUNkQyxlQUwwQixFQU0xQkMsVUFBQUEsRUFDQUMsY0FQMEIsSUFRMUJDLFFBQUFBLElBSUp4QixFQUFFLGVBQWVhLEtBQUssU0FBVVYsRUFBR0MsR0FDN0JBLEVBQUFBLEdBQUtxQixNQUFNLFNBQUFwQixHQUNQTCxFQUFBLGVBQWVRLFlBQVksVUFDM0JKLEVBQUZBLEdBQU9HLFNBQVMsY0FJeEJQLEVBQ0lBLHFCQUFtQlEsTUFBQUEsU0FBWUgsR0FDN0JMLEVBQUEsaUJBQWdCTyxZQUFTLFVBRi9CUCxFQUFBLGdCQUFBTyxTQUFBLFlBS0FQLEVBRUlBLHNCQUFtQk8sTUFBUyxTQUE1QkYsR0FGSkwsRUFBQSxnQkFBQVEsWUFBQSxVQUtFUixFQUFBLGlCQUFlTSxTQUFXLFlBQTVCTixFQUdJQSxlQUFFTSxXQUFpQkUsU0FBWUgsR0FIbkNMLEVBQUEsaUJBQUFPLFNBQUEsWUFNRUcsV0FBUWUsU0FBTXBCLEdBQ1pMLEVBQUEsaUJBQUFRLFlBQUEsWUFESlIsRUFJSSxRQUFTeUIsTUFBSyxTQUFXcEIsR0FKN0IsSUFBQXFCLEVBQUExQixFQUFBMkIsTUFBQUMsS0FBQSxVQVdNeEIsRUFBQUEsT0FBS3FCLFlBQWdCcEIsVUFDbkJMLEVBQUUsSUFBQTBCLEdBQUFuQixTQUFnQkMsWUFGMUJSLEVBQUUsZ0JBS1FhLEtBQUEsU0FBMkJWLEVBQUdJLEdBQ2hDUCxFQUFFSSxHQUFGcUIsTUFBUWpCLFNBQVlILEdBQ2xCTCxFQUFELGdCQUFEUSxZQUFBLFVBTkpSLEVBQUFJLEdBQUFHLFNBQUEsVUFRRVAsRUFBQSx3QkFBMEJRLFlBQVksVUFUNUNSLEVBQUEsd0JBQUE2QixHQUFBMUIsR0FBQUksU0FBQSxVQVlFUCxFQUFBLE1BQUFRLFlBQXNCLFVBQ3BCUixFQUFPTSxNQUFBQSxHQUFQSCxHQUFrQkksU0FBQSxZQUVkUCxFQUFFSSwwQkFBdUJJLFlBQVksWUFIN0NSLEVBTUssaUJBQWFhLEtBQUEsU0FBWVYsRUFBQUMsR0FDdEJKLEVBQUVJLEdBQUtJLFdBQVAsV0FDRUosRUFBRkEsR0FBQUcsU0FBbUJzQixVQUNqQnpCLEVBQUZBLEdBQUEwQixLQUFZLE9BQVpELEdBQXlCckIsR0FBQUEsWUFBWSxVQUNuQ1IsRUFBQUksR0FBQTBCLEtBQUEsT0FBQUQsR0FBQSxHQUEyQnJCLFNBQUFBLFVBVGpDUixFQUFBSSxHQUFBMEIsS0FBQSwyQkFBQXZCLFNBQUEsWUFESkcsV0FBQSxXQWNBVixFQUFTeUIsR0FBTWpCLFlBQUEsVUFDVHVCLEVBQUFBLEdBQUFBLEtBQUYsT0FBQUYsR0FBQSxHQUFBdEIsU0FBQSxVQUNFUCxFQUFBSSxHQUFEMEIsS0FBY0UsT0FDWEgsR0FBQSxHQUFBckIsWUFBQSxVQUNJeUIsRUFBQUEsMkJBQVd6QixZQUFBLGNBSnZCUixFQUFFLE9BQU95QixNQUFNLFNBQVVwQixHQUNyQkEsRUFBRTBCLGlCQUNGL0IsRUFBRSxhQUFhZ0MsUUFDWCxDQUNJQyxVQUFXLEdBRWYiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbXlDYXJvdXNlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHBJbmRpY2F0b3JzJylcbmNvbnN0IHdoeUNhcm91c2VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3doeUluZGljYXRvcnMnKVxuY29uc3Qgd2h5Q2Fyb3VzZWxJdGVtcyA9ICQoJy53aHktY2Fyb3VzZWwtaXRlbScpXG5jb25zdCBhcHBDYXJvdXNlbEl0ZW1zID0gJCgnLmFwcC1jYXJvdXNlbC1pdGVtJylcblxuaWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9PT0gJy8nKSB7XG4gICAgY29uc3QgaW5kZXhQcm9kdWN0T3RoZXIgPSAkKFwiLmluZGV4LXByb2R1Y3Qtb3RoZXJcIilcblxuICAgIGluZGV4UHJvZHVjdE90aGVyLmVhY2goZnVuY3Rpb24gKGksIG9iaikge1xuICAgICAgICAkKG9iaikubW91c2VlbnRlcihmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgJChvYmopLmFkZENsYXNzKCdhY3RpdmUnKVxuICAgICAgICAgICAgJChvYmopLmNoaWxkcmVuKCcuaW5kZXgtcHJvZHVjdC1ub3JtYWwtaW1nJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpXG4gICAgICAgICAgICAkKG9iaikuY2hpbGRyZW4oJy5pbmRleC1wcm9kdWN0LWFjdGl2ZS1pbWcnKS5hZGRDbGFzcygnYWN0aXZlJylcbiAgICAgICAgfSkubW91c2VsZWF2ZShmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgJChvYmopLnJlbW92ZUNsYXNzKCdhY3RpdmUnKVxuICAgICAgICAgICAgJChvYmopLmNoaWxkcmVuKCcuaW5kZXgtcHJvZHVjdC1ub3JtYWwtaW1nJykuYWRkQ2xhc3MoJ2FjdGl2ZScpXG4gICAgICAgICAgICAkKG9iaikuY2hpbGRyZW4oJy5pbmRleC1wcm9kdWN0LWFjdGl2ZS1pbWcnKS5yZW1vdmVDbGFzcygnYWN0aXZlJylcbiAgICAgICAgfSlcbiAgICB9KVxuXG4gICAgbXlDYXJvdXNlbC5hZGRFdmVudExpc3RlbmVyKCdzbGlkZS5icy5jYXJvdXNlbCcsIGV2ZW50ID0+IHtcbiAgICAgICAgYXBwQ2Fyb3VzZWxJdGVtcy5lYWNoKGZ1bmN0aW9uIChpLCBvYmopIHtcbiAgICAgICAgICAgICQob2JqKS5yZW1vdmVDbGFzcygnYWN0aXZlJylcbiAgICAgICAgICAgIGlmIChldmVudC50byA9PT0gaSkge1xuICAgICAgICAgICAgICAgICQob2JqKS5hZGRDbGFzcygnYWN0aXZlJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9KVxuXG4gICAgd2h5Q2Fyb3VzZWwuYWRkRXZlbnRMaXN0ZW5lcignc2xpZGUuYnMuY2Fyb3VzZWwnLCBldmVudCA9PiB7XG4gICAgICAgIHdoeUNhcm91c2VsSXRlbXMuZWFjaChmdW5jdGlvbiAoaSwgb2JqKSB7XG4gICAgICAgICAgICAkKG9iaikucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpXG4gICAgICAgICAgICBpZiAoZXZlbnQudG8gPT09IGkpIHtcbiAgICAgICAgICAgICAgICAkKG9iaikuYWRkQ2xhc3MoJ2FjdGl2ZScpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSlcbn1cblxuJCgnLmFib3V0LWNyZWRlbnRpYWxzJykuc2xpY2soe1xuICAgIGRvdHM6IGZhbHNlLFxuICAgIGluZmluaXRlOiB0cnVlLFxuICAgIHNwZWVkOiAzMDAsXG4gICAgc2xpZGVzVG9TaG93OiAxLFxuICAgIGNlbnRlck1vZGU6IHRydWUsXG4gICAgdmFyaWFibGVXaWR0aDogdHJ1ZSxcbiAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICBhdXRvcGxheVNwZWVkOiAyMDAwLFxuICAgIGFycm93czogZmFsc2UsXG59KTtcblxuJCgnLnByaWNlLWNhcmQnKS5lYWNoKGZ1bmN0aW9uIChpLCBvYmopIHtcbiAgICAkKG9iaikuY2xpY2soZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgJCgnLnByaWNlLWNhcmQnKS5yZW1vdmVDbGFzcygnYWN0aXZlJylcbiAgICAgICAgJChvYmopLmFkZENsYXNzKCdhY3RpdmUnKVxuICAgIH0pXG59KVxuXG4kKCcucHJpY2UtY2FyZC1maXJzdCcpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XG4gICAgJCgnLnByaWNlLXNlY29uZCcpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKVxuICAgICQoJy5wcmljZS1maXJzdCcpLmFkZENsYXNzKCdhY3RpdmUnKVxufSlcblxuJCgnLnByaWNlLWNhcmQtc2Vjb25kJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcbiAgICAkKCcucHJpY2UtZmlyc3QnKS5yZW1vdmVDbGFzcygnYWN0aXZlJylcbiAgICAkKCcucHJpY2Utc2Vjb25kJykuYWRkQ2xhc3MoJ2FjdGl2ZScpXG59KVxuXG4kKCcjd2VjaGF0LWJ0bicpLm1vdXNlZW50ZXIoZnVuY3Rpb24gKGUpIHtcbiAgICAkKCcud2VjaGF0LWxheWVyJykuYWRkQ2xhc3MoJ2FjdGl2ZScpXG59KS5tb3VzZWxlYXZlKGZ1bmN0aW9uIChlKSB7XG4gICAgJCgnLndlY2hhdC1sYXllcicpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKVxufSlcblxuJCgnLmJzYScpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XG4gICAgLy8gJCgnLnNlcnZpY2UtcmVzcG9uc2Utd3JhcCcpLmFkZENsYXNzKCdhY3RpdmUnKVxuICAgIC8vICQoJy50YWItY29udGVudCcpLmFkZENsYXNzKCdhY3RpdmUnKVxuICAgIC8vIGNvbnNvbGUubG9nKClcbiAgICBjb25zdCBjbHMgPSAkKHRoaXMpLmRhdGEoJ3RhcmdldCcpXG4gICAgLy8gJCgnLnRhYi1jb250ZW50JykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpXG4gICAgJCgncHJlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpXG4gICAgJCgnLicgKyBjbHMpLmFkZENsYXNzKCdhY3RpdmUnKVxufSlcblxuJCgnLnNlcnZpY2UtdGFiJykuZWFjaChmdW5jdGlvbiAoaSwgb2JqKSB7XG4gICAgJChvYmopLmNsaWNrKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICQoJy5zZXJ2aWNlLXRhYicpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKVxuICAgICAgICAkKG9iaikuYWRkQ2xhc3MoJ2FjdGl2ZScpXG4gICAgICAgICQoJy5zZXJ2aWNlLXRhYi1jb250ZW50JykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpXG4gICAgICAgICQoJy5zZXJ2aWNlLXRhYi1jb250ZW50JykuZXEoaSkuYWRkQ2xhc3MoJ2FjdGl2ZScpXG4gICAgICAgICQoJy50JykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpXG4gICAgICAgICQoJy50JykuZXEoaSkuYWRkQ2xhc3MoJ2FjdGl2ZScpXG4gICAgfSlcbiAgICAkKCcuc2VydmljZS1yZXNwb25zZS13cmFwJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpXG59KVxuXG4kKCcuc2lkZWJhci1pdGVtJykuZWFjaChmdW5jdGlvbiAoaSwgb2JqKSB7XG4gICAgJChvYmopLm1vdXNlZW50ZXIoZnVuY3Rpb24gKCkge1xuICAgICAgICAkKG9iaikuYWRkQ2xhc3MoJ2FjdGl2ZScpXG4gICAgICAgICQob2JqKS5maW5kKCdpbWcnKS5lcSgwKS5yZW1vdmVDbGFzcygnYWN0aXZlJylcbiAgICAgICAgJChvYmopLmZpbmQoJ2ltZycpLmVxKDEpLmFkZENsYXNzKCdhY3RpdmUnKVxuICAgICAgICAkKG9iaikuZmluZCgnLnNpZGViYXItY29udGVudC13ZWNoYXQnKS5hZGRDbGFzcygnYWN0aXZlJylcbiAgICB9KS5tb3VzZWxlYXZlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJChvYmopLnJlbW92ZUNsYXNzKCdhY3RpdmUnKVxuICAgICAgICAkKG9iaikuZmluZCgnaW1nJykuZXEoMCkuYWRkQ2xhc3MoJ2FjdGl2ZScpXG4gICAgICAgICQob2JqKS5maW5kKCdpbWcnKS5lcSgxKS5yZW1vdmVDbGFzcygnYWN0aXZlJylcbiAgICAgICAgJCgnLnNpZGViYXItY29udGVudC13ZWNoYXQnKS5yZW1vdmVDbGFzcygnYWN0aXZlJylcbiAgICB9KVxufSlcblxuJChcIiN1cFwiKS5jbGljayhmdW5jdGlvbiAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAkKFwiaHRtbCxib2R5XCIpLmFuaW1hdGUoXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNjcm9sbFRvcDogMCxcbiAgICAgICAgfSxcbiAgICAgICAgNTBcbiAgICApO1xufSk7Il19
