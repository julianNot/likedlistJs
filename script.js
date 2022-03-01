// Lista
class listNode{
    constructor(data){
        this.data = data
        this.next = null
    }
}

class linkedList { 
    constructor(head = null){
        this.head = head
    }

    size(){
        let count = 0
        let node = this.head
        while(node){
            count++
            node = node.next
        }
        return count
    }

    clear(){
        this.head = null
    }

    getLast(){
        let lastNode = this.head
        if(lastNode){
            while(lastNode.next){
                lastNode = lastNode.next
            }
        }
        return lastNode
    }

    getFirst(){
        return this.head
    }

    appendLast(data){
        let node = this.head
        if(node){
            while(node.next){
                node = node.next
            }
            node.next = new listNode(data)
        }else{
            this.head = new listNode(data)
        }
    }
    
    appendFirst(data){
        let node = this.head
        let newNode = new listNode(data)
        if(node){
            newNode.next = this.head
            this.head = newNode
        }else{
            this.head = new listNode(data)
        }
    }

    showlist(){
        let node = this.head
        while( node != null){
            console.log(node.data);
            node = node.next
        }
    }

    removeNode(data){
        let node = this.head
        let aux = this.head
        if(node.data == data){
            this.head = node.next
            return
        }
        while(node.next.data != data && node.next != null){
            node = node.next
        }
        aux = node
        node.next.next = aux
        return
    }

    delete(data){
        let tmp = this.head
        let aux = null
        
        while(tmp != null){
            if(tmp.data == data){
                if(!aux){
                    this.head = tmp.next
                } else{
                    aux.next = tmp.next
                    return
                }
            }
            aux = tmp
            tmp = tmp.next
        }
        return
    }
}

const list = new linkedList()

let formAdd = document.getElementById('formAdd') 
let table = document.getElementById('bodyTable')
let listElements = []
let tableTmp
let count = 1

formAdd.addEventListener('submit',function(event){
    event.preventDefault();
    list.appendLast(formAdd.elements['nameL'].value)
    formAdd.elements['nameL'].value = ""

    console.log("Agregado a lista!! \n" + list.size());

    table.innerHTML += `
    <tr id="info${count}" onclick="remove(name${count})">
        <td>${count}</td>
        <td id="name${count}">${list.getLast().data}</td>
    <tr>    
    `
    count++
})

const remove = (id) => {
    // console.log(id);
    id.innerHTML = ''
}


