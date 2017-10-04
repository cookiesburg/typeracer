class Node
  attr_accessor :value, :next

  def initialize(data)
    @value = data
    @next = nil
  end

end

class LinkedList

    def initialize()
      @head = nil
    end

    def prepend(data)
      newHead = new.Node(data)
      
      if @head.nil?
        @head = newHead
      end
     
      newHead.next = @head
      @head = newHead
    end

    def append(data)
      if @head
        newTail = new.Node(data)
        curr = @head

        while curr.next != nil
            curr = curr.next
        end

        curr.next = newTail
      else
        @head = newTail
      end
    end
    
    def remove(val)
       curr = @head
       prev = nil

       if @head = nil
         return
       elsif @head == val
         @head = @head.next
       else
         while curr.next != nil
           prev = curr
           curr = curr.next
         end

         prev.next = curr.next
       end
    end
    
end