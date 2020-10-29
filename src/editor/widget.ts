import { DocumentWidget, DocumentRegistry } from '@jupyterlab/docregistry';

import { INotebookModel } from '@jupyterlab/notebook';

import { listIcon } from '@jupyterlab/ui-components';

import EditorPanel from './panel';

import Save from './toolbar/save';

import Voila from './toolbar/voila';

export default class VoilaEditor extends DocumentWidget<
  EditorPanel,
  INotebookModel
> {
  constructor(
    context: DocumentRegistry.IContext<INotebookModel>,
    content: EditorPanel
  ) {
    super({ context, content });
    this.id = 'voila-editor/editor:widget';
    this.title.label = 'Voila GridStack Editor';
    this.title.closable = true;
    this.title.icon = listIcon;

    // Adding the buttons to the widget toolbar
    this.toolbar.addItem('save', new Save(this.content));
    this.toolbar.addItem('voila', new Voila(this.context.path));
  }

  dispose(): void {
    super.dispose();
  }
}
