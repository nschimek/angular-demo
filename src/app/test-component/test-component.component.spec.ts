import { Spectator, createComponentFactory, byTestId } from '@ngneat/spectator/jest';

import { TestComponentComponent } from './test-component.component';

describe('TestComponentComponent', () => {
  let spectator: Spectator<TestComponentComponent>;
  const createComponent = createComponentFactory(TestComponentComponent);

  beforeEach(() => {
    spectator = createComponent();
  })

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

  it('should display the true element when flag is true', () => {
    spectator.component.flag = true;
    
    expect(spectator.query(byTestId('true'))).toExist();
    expect(spectator.query(byTestId('false'))).not.toExist();
  });

  it('should display the true element when flag is false', () => {
    spectator.component.flag = false;
    spectator.detectChanges();

    expect(spectator.query(byTestId('true'))).not.toExist();
    expect(spectator.query(byTestId('false'))).toExist();
  });

  it('should do some more testing', () => {
    expect(spectator.query('h1')).toExist();
  })
});
