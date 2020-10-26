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
    debugger;
  }

  /**
   * Given the selected L1 service Urn event target, fetches the matching L2 services
   * which will populate the L2 service select element
   * @param {Object} evt - DOM select event object
   */
  @action
  onSelectedCategoryChange({ target: { value: selectedCategoryId } }) {
    console.log('selectedCategoryId' + selectedCategoryId);
    debugger;
    this.showServiceSelect = true;
  }
}
