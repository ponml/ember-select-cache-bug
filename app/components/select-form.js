/* eslint-disable no-console */
import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

/**
 * Container component to display the L1 (level 1) and L2 (level2) skill selectors that will lead to an RFP questionnaire.
 * @param {Array} l1Services - Array of L1 skills
 *
 * @example
 * <SelectForm
 *   @l1Services=l1Services
 * />
 */
export default class SelectForm extends Component {

  @tracked
  selectedCategory;

  @tracked
  showServiceSelect;


  constructor() {
    super(...arguments);
    console.log("form ctor")
  }

  @action
  onSelectedCategoryChange({ target: { value: selectedCategoryId } }) {
    console.log('selectedCategoryId' + selectedCategoryId);
    this.showServiceSelect = true;
    this.selectedCategory = this.args.categories.find((c) => c.id == selectedCategoryId);
  }

  @action
  updateSelectedCategoryForInit() {
    debugger;
    console.log("did-insert callback")
    this.selectedCategory = null;
  }
}
