import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="Kā spēlēt" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
      Uzmini vārdu 6 mēģinājumos. Pēc katra minējuma kvadrātu krāsa mainīsies, lai parādītu, cik tuvu tavs minējums bija vārdam.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="B"
          status="correct"
        />
        <Cell value="R" />
        <Cell value="O" />
        <Cell value="Š" />
        <Cell value="A" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Burts B atrodas vārdā un pareizajā vietā.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="K" />
        <Cell value="A" />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="M"
          status="present"
        />
        <Cell value="Ē" />
        <Cell value="R" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Burts M ir vārdā, bet nepareizā vietā.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="U" />
        <Cell value="G" />
        <Cell value="U" />
        <Cell isRevealing={true} isCompleted={true} value="N" status="absent" />
        <Cell value="S" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Burts N neatrodas nevienā vietā vārdā.
      </p>
      
    </BaseModal>
  )
}
