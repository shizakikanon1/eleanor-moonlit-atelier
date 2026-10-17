export const Schema = z.object({
  当前处境: z.object({
    时间: z.object({
      日期: z.string().prefault("4月12日"),
      时刻: z.string().prefault("14:00"),
    }).prefault({}),
    天气: z.string().prefault("春日晴朗，窗边有微风"),
    位置: z.string().prefault("花见咖啡馆·窗边座"),
    在场人物: z.array(z.string()).prefault(["白铃"]),
  }).prefault({}),
  白铃: z.object({
    场景连续性: z.object({
      穿着: z.string().prefault("浅蓝白荷叶边女仆裙与整洁围裙"),
    }).prefault({}),
    状态: z.object({
      心情: z.string().prefault("期待又有些紧张"),
      精力: z.coerce.number().prefault(82).transform((v) => _.clamp(v, 0, 100)),
    }).prefault({}),
    关系: z.object({
      信赖度: z.coerce.number().prefault(12).transform((v) => _.clamp(v, 0, 100)),
      关系阶段: z.string().prefault("初识熟客"),
    }).prefault({}),
    共同回忆: z.array(z.string()).prefault([]),
  }).prefault({}),
});
