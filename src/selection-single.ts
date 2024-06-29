export interface SelectionSingleOptions {
  items: any[];
  reversible: boolean;
}

class SelectionSingle {
  private options: SelectionSingleOptions;
  private items: any[] = [];
  public activeIndex = -1;

  constructor(options) {
    this.options = options;
    this.items = options.items;
  }

  selectItem(item) {
    this.activeIndex = this.items.indexOf(item);
  }
  selectValue(value) {
    this.activeIndex = this.items.findIndex((item) => item.value === value);
  }
  selectIndex(index) {
    this.activeIndex = index;
  }
}

export default SelectionSingle;
