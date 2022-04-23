interface Componentable {
  templateId: string;
  hostId: string;
  elementId?: string;
}

export default abstract class UIComponent<
  T extends HTMLElement,
  U extends HTMLElement
> {
  templateEl: HTMLTemplateElement;
  hostEl: T;
  element: U;

  constructor({ templateId, hostId, elementId }: Componentable) {
    this.templateEl = document.getElementById(
      templateId
    )! as HTMLTemplateElement;

    this.hostEl = document.getElementById(hostId)! as T;
    this.element = document.importNode(this.templateEl.content, true)
      .firstElementChild as U;

    if (elementId) {
      this.element.id = elementId;
    }
  }

  abstract configure?(): void;
  abstract mountToHost(): void;
}
