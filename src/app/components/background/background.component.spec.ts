import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BackgroundComponent } from './background.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MenuModule } from 'primeng/menu';
import { NotificationService } from 'src/app/services/notification.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('BackgroundComponent', () => {
  let component: BackgroundComponent;
  let fixture: ComponentFixture<BackgroundComponent>;
  let notificationService: NotificationService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, MenuModule, HttpClientTestingModule],
      declarations: [BackgroundComponent],
      providers: [NotificationService],
    }).compileComponents();

    fixture = TestBed.createComponent(BackgroundComponent);
    component = fixture.componentInstance;
    notificationService = TestBed.inject(NotificationService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Identifies User Device', () => {
    it('should identify a mobile device - Android', () => {
      Object.defineProperty(navigator, 'userAgent', {
        value: 'Mozilla/5.0 (Linux; Android 10; Pixel 3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Mobile Safari/537.36',
        configurable: true,
        writable: true,
      });

      component.identifiesUserDevice();
      expect(component.mobileDevide).toBeTruthy();
    });

    it('should identify a mobile device - iPhone', () => {
      Object.defineProperty(navigator, 'userAgent', {
        value: 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_7_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.6.3 Mobile/15E148 Safari/604.1',
        configurable: true,
        writable: true,
      });

      component.identifiesUserDevice();
      expect(component.mobileDevide).toBeTruthy();
    });

    it('should identify a mobile device - iPad', () => {
      Object.defineProperty(navigator, 'userAgent', {
        value: 'Mozilla/5.0 (iPad; CPU OS 14_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1 Mobile/15E148 Safari/604.1',
        configurable: true,
        writable: true,
      });

      component.identifiesUserDevice();
      expect(component.mobileDevide).toBeTruthy();
    });

    it('should identify a mobile device - iPod', () => {
      Object.defineProperty(navigator, 'userAgent', {
        value: 'Mozilla/5.0 (iPod; CPU iPhone OS 14_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1 Mobile/15E148 Safari/604.1',
        configurable: true,
        writable: true,
      });

      component.identifiesUserDevice();
      expect(component.mobileDevide).toBeTruthy();
    });

    it('should identify a mobile device - Windows Phone', () => {
      Object.defineProperty(navigator, 'userAgent', {
        value: 'Mozilla/5.0 (Windows Phone 10.0; Android 6.0.1; Microsoft; Lumia 950 XL) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Mobile Safari/537.36 Edge/13.10586',
        configurable: true,
        writable: true,
      });

      component.identifiesUserDevice();
      expect(component.mobileDevide).toBeTruthy();
    });

    it('should identify a mobile device - BlackBerry', () => {
      Object.defineProperty(navigator, 'userAgent', {
        value: 'Mozilla/5.0 (BlackBerry; U; BlackBerry 9900; en) AppleWebKit/534.11+ (KHTML, like Gecko) Version/7.1.0.346 Mobile Safari/534.11+',
        configurable: true,
        writable: true,
      });

      component.identifiesUserDevice();
      expect(component.mobileDevide).toBeTruthy();
    });

    it('should identify a non-mobile device', () => {
      Object.defineProperty(navigator, 'userAgent', {
        value: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36 OPR/104.0.0.0 (Edition std-1)',
        configurable: true,
        writable: true,
      });

      component.identifiesUserDevice();
      expect(component.mobileDevide).toBeFalsy();
    });
  });
  
  describe('updateNotificationLabel', () => {
    it('should update notification label with the new notification count', () => {
      component.newNotificationsCount = 5;
      component.updateNotificationLabel();
      expect(component.items.find(item => item.routerLink === '/notifications')?.label).toBe('Notificações <span class="notification-badge">5</span>');
    });
  });
});
