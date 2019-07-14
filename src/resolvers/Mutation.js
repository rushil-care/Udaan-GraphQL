import uuidv4 from "uuid/v4";


const Mutation = {
  add_asset(parent, args, { db }, info) {
    const assets = { ...args.data };
    db.asset.push(assets);
    return assets;
  },

  add_task(parent, args, { db }, info) {
    const tasks = { ...args.data };
    db.task.push(tasks);
    return tasks;
  },

  add_worker(parent, args, { db }, info) {
    const works = { ...args.data };
    db.work.push(works);
    return works;
  },

  allocate_task(parent, args, { db }, info) {
    const assetIdTaken = db.asset.some(asset => {
      return asset.id === args.data.assetId;
    });

    const workerIdTaken = db.work.some(works => {
      return works.id === args.data.workerID;
    });

    const TaskIdTaken = db.task.some(ta => {
      return ta.id === args.data.taskId;
    });

    if (!assetIdTaken) {
      throw new Error("No assetID");
    }

    if (!workerIdTaken) {
      throw new Error("NO WorkerID");
    }
    if (!TaskIdTaken) {
      throw new Error("No TaskID");
    }

    const allocate = { ...args.data };
    db.allocateTasks.push(allocate);
    return allocate;
  },



};
export { Mutation as default };
