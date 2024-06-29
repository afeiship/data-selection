export interface DataSelectionOptions {
  items: any[];
  multiple: boolean;
  reversible: boolean;
  max: number;
  min: number;
}

class DataSelection {
  private options: DataSelectionOptions;
  private items: any[] = [];

  constructor(options: DataSelectionOptions) {
    this.options = options;
    this.items = options.items;
  }

}

export default DataSelection;
