from django.urls import path
from django.views.generic import TemplateView

from . import views
from .views import UserDeleteView, UserUpdateView, UserDetailView, PwUpdateView


app_name = 'mypage'

urlpatterns = [
    path('library/<pk>/', views.LibraryView, name='library'),
    path('env/', views.EnvView, name='env'),
    path('profile/', views.ProfileView , name='profile'),
    
    path('loglock/<pk>/', views.LogLock, name = 'loglock'), # 2단계 인증

    path('delete/<int:pk>/', UserDeleteView.as_view(), name='delete'),
    path('update/<int:pk>/', UserUpdateView.as_view(), name='update'),
    path('pwupdate/<int:pk>/', PwUpdateView.as_view(), name='pwupdate'),
    path('picture/<int:pk>/', views.PictureView, name='picture'),
    # path('update/<int:pk>/', UserDetailView.as_view(), name='update'),

    # 데이터 처리
    path('choose/', views.choose, name='choose'),
    path('mydic/', views.mydic, name='mydic'),
    path('mydic_del/', views.mydic_del, name='mydic_del'),

    # 별점 데이터 처리
    path('mydic2/', views.mydic2, name='mydic2'),

    # 이메일 인증 완료
    path('email_done/<pk>', views.email_done, name='email_done'),
    path('email_done2/', views.email_done2, name='email_done2'),
    
    # 고객지원센터
    path('notice/', views.notice, name='notice'),

    # 이용권 구매
    path('pay/', views.pay, name='pay'),
    path('approval/<pk>/', views.approval, name='approval'),

]
