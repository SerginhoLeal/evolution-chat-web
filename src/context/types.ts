export interface InstancesListProps {
  id: string;
  instance_name: string;
  chat: {
    id: string;
    instance_name: string; //
    second_member: {
      name: string;
      number: string;
    }
  }[]
}
