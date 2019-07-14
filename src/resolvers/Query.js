const Query = {
  asset_all(parent, args, { db }, info) {
    return db.asset;
  },
  get_tasks_for_worker(parent, args, { db }, info) {
    return db.allocateTasks.filter(all => {
      return args.query === all.workerID;

    });
    // console.log(args.query)


  },



};
export { Query as default };
