import { MockBuilder, MockRender } from "ng-mocks";
import { AppComponent } from "./app.component";
import { AppModule } from "./app.module";

describe('Appcomponent', () => {

  beforeEach(() => {
    return MockBuilder(AppComponent, AppModule)
  });

  it('should create', () => {
    const fixture = MockRender(AppComponent);
    expect(fixture.point.componentInstance).toBeDefined();
  });
});
