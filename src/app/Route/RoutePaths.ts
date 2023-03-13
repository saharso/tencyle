export default class RoutePaths {
  private param: string;
  root = "/";
  get vulnerabilityDisplay() {
    return this.root + "library-vulnerability/" + this.param;
  }
  constructor(param?: string) {
    this.param = param;
  }
}
