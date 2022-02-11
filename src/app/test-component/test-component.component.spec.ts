import { Spectator, createComponentFactory } from '@ngneat/spectator';

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
});
