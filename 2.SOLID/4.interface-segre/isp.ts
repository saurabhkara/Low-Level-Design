interface IDocumentOpener {
    openDoc(): void
}

interface IDocumentSaver {
    saveDoc(): void
}

interface IDocumentEdit {
    editDoc(): void
}

interface IDocumentScanner {
    scanDoc(): void
}


class NormalEditor implements IDocumentOpener, IDocumentSaver, IDocumentEdit {
    openDoc(): void {
        console.log("Doc file opened")
    }

    editDoc(): void {
        console.log("Document edited")
    }

    saveDoc(): void {
        console.log("Document saved")
    }
}

class AdvanceEditor implements IDocumentEdit, IDocumentOpener, IDocumentScanner, IDocumentSaver {
    openDoc(): void {
        console.log("Doc file opened")
    }

    editDoc(): void {
        console.log("Document edited")
    }

    saveDoc(): void {
        console.log("Document saved")
    }

    scanDoc(): void {
        console.log("Document scanned")
    }
}

